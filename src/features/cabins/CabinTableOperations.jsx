import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

const CabinTableOperations = () => {
	return (
		<TableOperations>
			<Filter
				filterField={"discount"}
				options={[
					{
						value: "all",
						label: "All",
					},
					{
						value: "no-discount",
						label: "No Discount",
					},
					{
						value: "with-discount",
						label: "With Discount",
					},
				]}
			/>

			<SortBy
				options={[
					{
						value: "name-asc",
						label: "Sort By Name (A-Z)",
					},
					{
						value: "name-desc",
						label: "Sort By Name (Z-A)",
					},
					{
						value: "regularPrice-asc",
						label: "Sort By price (low to high)",
					},
					{
						value: "regularPrice-desc",
						label: "Sort By price (high to low)",
					},
					{
						value: "maxCapacity-asc",
						label: "Sort By capacity (low to high)",
					},
					{
						value: "maxCapacity-desc",
						label: "Sort By capacity (high to low)",
					},
				]}
			/>
		</TableOperations>
	);
};

export default CabinTableOperations;
