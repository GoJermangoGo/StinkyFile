import type { ReactNode } from "react";

export function Link({ url, children }: { url: string; children?: ReactNode }) {
	return (
		<>
			<a href={url} target="_blank" rel="noreferrer" className="text-blue-600">
				{children ?? url}
			</a>
		</>
	);
}
