import { useContext } from 'react';
import { Form, Row } from 'react-bootstrap';
import AppCtx from "../context.js"

const Setting = () => {
	const {
		setPostsSrvAll,
		postsSrvAll
	} = useContext(AppCtx);
	console.log(postsSrvAll);
	return (
		<Row>
			<Form>
				<Form.Check
					className="mb-3"// prettier-ignore
					type="switch"
					label={`Показывать все посты включая и тег "DiplomLk12"`}
					checked={postsSrvAll}
					onChange={e => e.preventDefault()}
					onClick={e => {
						if (e.currentTarget.checked) {
							setPostsSrvAll(true)
						}
						else {
							setPostsSrvAll(false)
						}
					}
					}
				/>
			</Form>

		</Row>
	);
}

export default Setting;
