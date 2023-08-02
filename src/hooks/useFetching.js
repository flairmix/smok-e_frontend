import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, seIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            seIsLoading(true)
            await callback();
        } catch (error) {
            setError(error.message);
        } finally {
            seIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
} 