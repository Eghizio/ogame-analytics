import { NextApiHandler } from "next";
import { mockedUser } from "../../../constants/data/mocks";


const handler: NextApiHandler = (req, res) => {
	if(req.method === "GET") return res.status(200).json({ user: mockedUser });

	if(req.method === "POST"){
		if(req.body.email === mockedUser.email && req.body.password == mockedUser.password){
			return res.status(200).json({ user: mockedUser });
		}
	}

	return res.status(404).end();
};

export default handler;