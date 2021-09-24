import Link from "next/link";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/settings">
				<a>Settings</a>
			</Link>
		</div>
	);
};

export default Home;
