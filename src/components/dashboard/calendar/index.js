import staticCalendar from '../../../components/StaticCalendar';

export default function Calendar() {
	return (
		<div class="flex items-center justify-center w-full h-screen bg-gray-500">
			<div class="ml-16 flex">
				{staticCalendar.map((year, index) => (
					<div onClick={() => console.log(index)} class="mx-5 p-4 bg-gray-900 text-white font-bold cursor-pointer">{`202${index}`}</div>
				))}
			</div>
		</div>
	);
}
