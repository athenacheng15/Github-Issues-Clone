import { XIcon } from "@primer/octicons-react";
import { Dispatch, SetStateAction } from "react";

const itemList = ["athenacheng15", "Somebody"];

interface AssigneeProps {
	setPopAssigneeVis: Dispatch<SetStateAction<boolean>>;
}

export default function PopAssignee({ setPopAssigneeVis }: AssigneeProps) {
	return (
		<>
			<div
				className={`z-[1] fixed px-4 w-[100%] h-[100%] right-0 top-0 text-[#24292f] bg-black/50  M:absolute M:h-[auto] M:w-[auto] M:px-0 M:bg-transparent M:top-7 M:left-4 M:right-[auto]`}
			>
				<div className="flex  w-[100%] h-[100%] items-center M:text-[12px] ">
					<div className="w-[100%] h-[auto] max-h-[520px] overflow-y-scroll rounded-xl border border-[#d1d5da] border-solid bg-[#ffffff] M:w-[300px] M:rounded-md ">
						<header className="flex p-4 w-[100%] justify-between M:py-2">
							<p>
								<strong>Filter by who’s assigned</strong>
							</p>
							<button
								className="cursor-pointer"
								onClick={() => setPopAssigneeVis(false)}
							>
								<XIcon />
							</button>
						</header>
						<div className="p-4 border-0 border-t border-[#d1d5da] border-solid  M:p-2">
							<input
								className="w-[100%] pl-3 h-8 border border-[#d1d5da] border-solid rounded-md focus:border-[#0969da] focus:border-2"
								placeholder="Filter users"
							></input>
						</div>
						<button className="flex w-[100%] px-6 py-4 font-normal border-0 border-t border-[#d1d5da] border-solid last:rounded-b-[12px] cursor-pointer hover:bg-[#f6f8fa] M:py-2">
							<p>
								<strong>Assigned to nobody</strong>
							</p>
						</button>
						<div className="flex flex-wrap">
							{itemList.map((item) => (
								<button
									key={item}
									id={item}
									className="flex items-center w-[100%] px-6 py-4 font-normal border-0 border-t border-[#d1d5da] border-solid last:rounded-b-[12px] cursor-pointer hover:bg-[#f6f8fa] M:py-2"
								>
									<img className="w-5 h-5 mt-1 rounded-full bg-[#D36E70]"></img>
									<p className="ml-2">
										<strong>{item}</strong>
									</p>
									<p className="ml-2 text-[#57606a] ">Good for newComers</p>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
