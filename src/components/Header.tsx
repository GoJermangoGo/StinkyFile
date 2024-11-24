import { Link } from "@components/util/Link";

export function Header() {
	return (
		<>
			<h1 className="pb-4 text-7xl font-bold">Stinky File</h1>
			<span className="italic">
				Free, <Link url="https://github.com/GoJermangoGo/StinkyFile">open source</Link>, cross-platform file
				transfer service. Gee whiz; those files sure do stink.
			</span>
			<hr></hr>
		</>
	);
}
