import { Header } from "@components/Header.tsx";
import { useToastStore } from "@stores/Test";

export function App() {
	const { toast, incrementToast } = useToastStore();

	return (
		<>
			<Header></Header>
			<hr></hr>
			<div className="card">
				<button onClick={incrementToast}>{toast} toast</button>
			</div>
		</>
	);
}
