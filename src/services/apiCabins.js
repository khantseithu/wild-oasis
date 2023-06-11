import supabase from "./supabase";

export async function getCabins() {
	let { data, error } = await supabase.from("cabin").select("*");

	if (error) {
		console.error(error);
		throw new Error("Error fetching cabins");
	}

	return data;
}

export async function deleteCabinApi(id) {
	const { data, error } = await supabase.from("cabin").delete().eq("id", id);

	if (error) {
		console.error(error);
		throw new Error("Error deleting cabin");
	}

	return data;
}
