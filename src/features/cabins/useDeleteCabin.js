import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
	const queryClient = useQueryClient();
	const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
		mutationFn: deleteCabinApi,
		onSuccess: () => {
			toast("Cabin deleted successfully");
			queryClient.invalidateQueries({
				queryKey: ["cabins"],
			});
		},
		onError: (error) => {
			toast(error.message);
		},
	});

	return { isDeleting, deleteCabin };
}
