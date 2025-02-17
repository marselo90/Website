// import { PastEvents } from "../../const/PastEvents";
// import { superheroes } from "../../const/superheroes";
// import { get_element } from "../../utils/utils";

import { PastEvents } from "../../const/PastEvents";
import { superheroes } from "../../const/superheroes";

function GuestInfo(props: any) {
	const guest = superheroes.find((obj) => {
		return obj.id === props.guestID;
	});

	return (
		<div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={guest?.name}>
			<div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
				<img
					alt="team"
					className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
					src={guest?.image}
				/>
				<div className="flex-grow">
					<h2 className="text-gray-900 title-font font-medium">
						{guest?.name}
					</h2>
					<p className="text-gray-500">{guest?.company}</p>
				</div>
			</div>
		</div>
	);
}

export const PastEventsList = () => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			{PastEvents.map((item) => (
				<div key={item.year}>
					<div className="relative">
						<img
							className="h-28 inset-0 w-full object-cover object-top"
							src="/images/bridge_reduced.jpg"
							alt=""
						/>
						<div
							aria-hidden="true"
							className="absolute inset-0 w-full h-full bg-blue-200 bg-opacity-60 backdrop-blur-sm"
						></div>

						<h1
							className="absolute absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold sm:text-3xl text-2xl title-font font-medium text-gray-600"
							key={item.year}
						>
							{item.year}
						</h1>
					</div>

					{item.events.map((event) => (
						<div
							className="p-12 flex flex-wrap -m-2 items-start"
							key={event.title}
						>
							<div>
								<span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
									{event.category}
								</span>

								<h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
									{event.title}
								</h2>
							</div>

							<p className="leading-relaxed mb-8">{event.descriprion}</p>
							<div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"></div>
							{event.guest_id.map((guestID) => (
								<GuestInfo guestID={guestID} key={guestID} />
							))}
						</div>
					))}
				</div>
			))}
		</section>
	);
};
