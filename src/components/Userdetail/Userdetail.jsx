import React from "react";
import "./Userdetail.css";

import { InfinitySpin } from "react-loader-spinner";

const Userdetail = (props) => {
	const user = props.user;

	if (!props.user) {
		return (
			<div className='UserdetailContainer border border-3 rounded-3 m-auto mb-4 mt-5 px-3 py-4 justify-content-between d-flex bg-primary text-white'>
				<h4 className='w-100 text-center'>
					Please select a user from above buttons
				</h4>
			</div>
		);
	}

	return (
		<div className='UserdetailContainer border rounded-3 m-auto mb-4 mt-5 px-lg-5 py-4 justify-content-between d-md-flex bg-primary text-white'>
			{props.isUserLoading ? (
				<h4 className='text-center w-100'>
					<p>Loading the user</p>
					<InfinitySpin color='white' />
				</h4>
			) : (
				<>
					<div className='row gx-3 p-0'>
						<div
							key={props.user.id}
							className='justify-content-start align-items-between col p-0'>
							<div className='input-wrapper text-center useridwrapper mb-md-4 fs-5 bg-white text-black border rounded rounded-circle fw-bold mx-auto'>
								{props.userid ? props.userid : ""}
							</div>

							<div className='input-wrapper mx-0 mt-3 d-flex px-4'>
								<label
									key={user.id}
									htmlFor='fullname'
									className='fullnameLabel fs-4'>
									<i
										class='fa fa-user'
										aria-hidden='true'></i>
								</label>
								<input
									type='text'
									id='fullname'
									className='border border-white rounded rounded-3 ms-md-4 ms-3 px-md-3 ps-1 bg-white text-black fw-bold'
									value={
										user.first_name && user.last_name
											? user.first_name +
											  " " +
											  user.last_name
											: "First Name"
									}
									disabled
								/>
							</div>

							<div className='input-wrapper mt-3 mb-4 d-flex px-4'>
								<label
									htmlFor='email'
									className='emailLabel fs-4'>
									<i
										class='fa fa-envelope'
										aria-hidden='true'></i>
								</label>
								<input
									type='email'
									id='email'
									className='border border-white rounded rounded-3 ms-md-4 ms-3 px-md-3 ps-1 bg-white text-black fw-bold'
									value={
										user.email
											? user.email
											: "example@email.com"
									}
									disabled
								/>
							</div>
						</div>

						<div className='justify-content-end avatar-wrapper col-lg-2'>
							<img
								src={
									user.avatar
										? user.avatar
										: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
								}
								alt=''
								srcset=''
								className='border border-5 rounded rounded-circle'
								width='200'
							/>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Userdetail;
