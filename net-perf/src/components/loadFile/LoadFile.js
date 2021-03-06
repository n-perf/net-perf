import React, { useState } from 'react';
import Uploadbtn from './Uploadbtn';

const LoadFile = props => {
	const [filenames, setFilenames] = useState({ 0: '', 1: '', 2: '', 3: '' });

	const onExecuteClick = e => {
		props.setOnRunning(true);
	};

	const chooseFile = e => {
		switch (e.target.id) {
			case '0':
				setFilenames(prevState => ({
					...prevState,
					0: e.target.files[0].name,
				}));
				props.setFiles(prevState => ({
					...prevState,
					0: e.target.files[0],
				}));
				break;
			case '1':
				setFilenames(prevState => ({
					...prevState,
					1: e.target.files[0].name,
				}));
				props.setFiles(prevState => ({
					...prevState,
					1: e.target.files[0],
				}));
				break;
			case '2':
				setFilenames(prevState => ({
					...prevState,
					2: e.target.files[0].name,
				}));
				props.setFiles(prevState => ({
					...prevState,
					2: e.target.files[0],
				}));
				break;
			case '3':
				setFilenames(prevState => ({
					...prevState,
					3: e.target.files[0].name,
				}));
				props.setFiles(prevState => ({
					...prevState,
					3: e.target.files[0],
				}));
				break;
			default:
				break;
		}
	};

	return (
		<>
			<div id="LoadFile_container">
				<div id="upload_container">
					<Uploadbtn seq={'0'} filenames={filenames[0]} chooseFile={chooseFile}></Uploadbtn>
					<Uploadbtn seq={'1'} filenames={filenames[1]} chooseFile={chooseFile}></Uploadbtn>
					<Uploadbtn seq={'2'} filenames={filenames[2]} chooseFile={chooseFile}></Uploadbtn>
					<Uploadbtn seq={'3'} filenames={filenames[3]} chooseFile={chooseFile}></Uploadbtn>
				</div>
				<div id="execute" onClick={onExecuteClick}>
					<div>Performance Test</div>
				</div>
			</div>
		</>
	);
};

export default LoadFile;
