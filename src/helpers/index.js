
export const generateId = () => {
    const random = Math.random().toString(36).substring(2, 18)
    const date = Date.now().toString(36)

    return random + date
}

export const formateDate = date => {
    const newDate = new Date(date);

    const option = {
        year:"numeric",
        month:"long",
        day:"2-digit",
    }

    return newDate.toLocaleDateString("es-ES", option)

}