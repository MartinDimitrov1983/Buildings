import { getBuildings } from '../services/services'

export const fetchData = async (setBuildings,  setLoading) => {
    const props = await getBuildings()

    setBuildings(props)
    setLoading(false)
}
