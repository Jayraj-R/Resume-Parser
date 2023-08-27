import React from 'react';

const ResumeForm = () => {
	return (
		<div className='w-11/12 sm:w-9/12 lg:w-1/2 bg-white rounded-md drop-shadow-lg flex flex-col gap-5 py-5 px-10'>
			<span className='text-xl lg:text-3xl text-center'>Application form</span>

			<form className='form flex flex-col lg:text-lg gap-y-2'>
				<div className='form-item gap-x-5 flex items-baseline'>
					<span className='form-label'>Upload Resume</span>
					<label
						className='text-sm cursor-pointer text-blue-500
            hover:underline hover:text-blue-600'
						for='upload-resume'
					>
						Attach File
					</label>
					<input type='file' id='upload-resume' name='upload-resume' hidden />
				</div>
				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>First Name</span>
					<input type='text' className='form-input ml-5 rounded' />
				</div>
				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>Last Name</span>
					<input type='text' className='form-input ml-5 rounded' />
				</div>

				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>Email address</span>
					<input type='text' className='form-input ml-5 rounded' />
				</div>
				<div className='form-item gap-x-5 flex flex-col'>
					<span className='form-label'>Phone number</span>
					<input type='text' className='form-input ml-5 rounded' />
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
