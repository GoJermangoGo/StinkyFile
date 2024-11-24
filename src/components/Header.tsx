import { Link } from "@components/util/Link";

export function Header() {
	return (
		<>
			<img src="/logo.png"></img>
			<span className="italic">
				Free, <Link url="https://github.com/GoJermangoGo/StinkyFile">open source</Link>, cross-platform file
				transfer service. Gee whiz; those files sure do stink.
			</span>
			<hr></hr>
		</>
	);
}
