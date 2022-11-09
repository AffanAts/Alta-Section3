import { useMutation } from "@apollo/client"
import { updatePassengers } from "../GraphQL/gql"

export const UpdateMutation = () => {
    const [updatePassenger] = useMutation(updatePassengers)
    return {
        updatePassenger
    }
}