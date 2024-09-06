import { useState } from 'react';
import video from '../data/video.js';
import {
	faThumbsUp,
	faThumbsDown,
	faComments,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button.jsx';

function App() {
	console.log("Here's your data:", video);
	const [upvotes, setUpvotes] = useState(video.upvotes);
	const [downvotes, setDownvotes] = useState(video.downvotes);
	const [isHiddenComments, setIsHiddenComments] = useState(false);

	const toggleComments = () => {
		setIsHiddenComments(!isHiddenComments);
	};

	return (
		<div className="App">
			<iframe
				width="919"
				height="525"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				frameBorder="0"
				allowFullScreen
				title="Thinking in React"
			/>
			<h1>{video.title}</h1>
			<p>
				{video.views} views | {video.createdAt}{' '}
			</p>

			<Button
				label="upvotes"
				count={upvotes}
				icon={faThumbsUp}
				onClick={() => setUpvotes(upvotes + 1)}
			/>

			<Button
				label="downvotes"
				count={downvotes}
				icon={faThumbsDown}
				onClick={() => setDownvotes(downvotes + 1)}
			/>

			<div>
				<Button
					label={isHiddenComments ? 'Show' : 'Hide'}
					icon={faComments}
					onClick={toggleComments}
				/>
			</div>

			<h2>{video.comments.length} comments</h2>
			{isHiddenComments
				? null
				: video.comments.map((comment) => (
						<div key={comment.id}>
							<p>
								<strong>{comment.user}</strong>
							</p>
							<p>{comment.comment}</p>
						</div>
				  ))}
		</div>
	);
}

export default App;
