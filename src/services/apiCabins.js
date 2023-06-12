import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
	let { data, error } = await supabase.from("cabin").select("*");

	if (error) {
		console.error(error);
		throw new Error("Error fetching cabins");
	}

	return data;
}

export async function createEditCabin(newCabin, id) {
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

	const imageName = `${Math.random().toString(36).substring(2)}-${
		newCabin.image?.name
	}`.replaceAll("/", "");

	const imagePath = hasImagePath
		? newCabin.image
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	// create / update cabin
	let query = supabase.from("cabin");

	// create
	if (!id) {
		query = query.insert({ ...newCabin, image: imagePath });
	}

	//edit
	if (id) {
		query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
	}

	const { data, error } = await query.select().single();

	// upload image
	if (hasImagePath) {
		return data;
	}

	const { error: uploadError } = await supabase.storage
		.from("cabin-images")
		.upload(imageName, newCabin.image);

	// if error uploading image, delete cabin
	if (uploadError) {
		await supabase.from("cabin").delete().eq("id", data.id);
		console.error(uploadError);
		throw new Error("Cabin image upload error & cabin deleted");
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
