import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";

import Userdetail from "../Userdetail/Userdetail";

import { setUserList } from "../../actions";
import { getUserDetailAPI, getUserListAPI } from "../../functions/user";

import "./Userlist.css";

export default function Userlist() {
	const dispatch = useDispatch();
	const userListResponse = useSelector((state) => state.userList);

	const [curruser, setCurruser] = useState(null);
	const [userdetail, setUserdetail] = useState(null);
	const [loading, setLoading] = useState(null);

	const [userlistloading, setUserlistloading] = useState(null);

	useEffect(() => {
		setUserlistloading(true);

		getUserListAPI((error, res) => {
			if (error) return;
			else {
				dispatch(setUserList(res));

				setTimeout(() => {
					document.title = "Userlist fetched ...";
					setUserlistloading(false);
				}, 3000);
			}
		});
	}, []);

	const handleFindUser = (e) => {
		console.log(e);

		const { nodeName, textContent } = e.target;
		if (nodeName !== "BUTTON") {
			console.log(textContent);
			return;
		}
		setLoading(true);

		getUserDetailAPI(textContent, (error, res) => {
			console.log(error);
			console.log(res);

			if (error) return;
			else {
				setTimeout(() => {
					setCurruser(e.target.textContent);
					setUserdetail(res.data);
					setLoading(false);
				}, 1000);
			}
		});
	};

	if (userlistloading) {
		return (
			<div className='border border-primary text-white py-3 mt-4 rounded bg-primary'>
				<h4 className='text-center w-100'>
					<p>Fetching user list ...</p>
				</h4>
				<InfinitySpin color='white' />
			</div>
		);
	}

	return (
		<div className='UserlistContainer py-5'>
			<h5 className='fw-bold'>USER LIST</h5>

			<div
				className='border border-primary py-3 rounded bg-primary userlistBtnWrapper'
				onClick={(e) => handleFindUser(e)}>
				{userListResponse.data &&
					userListResponse.data.map((user, index) => {
						return (
							<button
								key={user.id}
								className='mx-1 px-3 fw-bold bg-white text-primary border rounded rounded-pill userswitch-btn'>
								{user.id}
							</button>
						);
					})}
			</div>

			<Userdetail
				userid={curruser}
				user={userdetail}
				isUserLoading={loading}
			/>
		</div>
	);
}
