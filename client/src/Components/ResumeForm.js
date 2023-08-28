import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResumeForm = () => {
	const [resume, setResume] = useState(undefined);
	const [parsedData, setParsedData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const handleParseClick = async () => {
			try {
				const formData = new FormData();
				formData.append('resume', resume);

				const response = await axios.post(
					'http://localhost:5000/parse_resume',
					formData
				);
				setParsedData(response.data);
			} catch (error) {
				if (error.response && error.response.status === 400) {
					alert('Error: Invalid file format.');
				} else if (error.response && error.response.status === 500) {
					alert(
						'Unexpected Error occurred at our end. Please try again later.'
					);
				}
				console.error('Error parsing resume:', error);
			}
		};

		setIsLoading(true);
		if (resume) handleParseClick();
		else setParsedData({});
		setIsLoading(false);
	}, [resume]);

	return (
		<div className='w-11/12 sm:w-9/12 lg:w-1/2 bg-white rounded-md drop-shadow-lg flex flex-col gap-5 py-5 px-10'>
			<span className='text-xl lg:text-3xl text-center'>Application form</span>

			<form className='form flex flex-col lg:text-lg gap-y-2'>
				<div className='form-item gap-x-5 flex items-baseline'>
					<span className='form-label'>Upload Resume</span>
					{resume ? (
						<>
							<span className='text-sm cursor-pointer text-gray-500'>
								{resume.name}
							</span>
							<label
								className='text-sm cursor-pointer text-blue-500
            hover:underline hover:text-blue-600'
								for='upload-resume'
							>
								Update
							</label>
						</>
					) : (
						<label
							className='text-sm cursor-pointer text-blue-500
            hover:underline hover:text-blue-600'
							for='upload-resume'
						>
							Choose File
						</label>
					)}
					<input
						onChange={(event) => {
							setResume(event.target.files[0]);
						}}
						type='file'
						id='upload-resume'
						name='upload-resume'
						hidden
					/>
				</div>
				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>First Name</span>
					<input
						type='text'
						disabled={isLoading}
						value={parsedData.firstName}
						onChange={(e) =>
							setParsedData({ ...parsedData, firstName: e.target.value })
						}
						className='form-input ml-5 rounded'
					/>
				</div>
				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>Last Name</span>
					<input
						type='text'
						disabled={isLoading}
						value={parsedData.lastName}
						onChange={(e) =>
							setParsedData({ ...parsedData, lastName: e.target.value })
						}
						className='form-input ml-5 rounded'
					/>
				</div>

				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>Email address</span>
					<input
						type='text'
						disabled={isLoading}
						value={parsedData.email}
						onChange={(e) =>
							setParsedData({ ...parsedData, email: e.target.value })
						}
						className='form-input ml-5 rounded'
					/>
				</div>
				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>Phone number</span>
					<input
						type='text'
						disabled={isLoading}
						value={parsedData.phone}
						onChange={(e) =>
							setParsedData({ ...parsedData, phone: e.target.value })
						}
						className='form-input ml-5 rounded'
					/>
				</div>
			</form>
			<div className='flex justify-center'>
				<button className='text-lg bg-blue-500 w-fit text-white px-5 py-2 rounded hover:bg-blue-700 active:scale-95'>
					Apply
				</button>
			</div>
		</div>
	);
};

export default ResumeForm;
