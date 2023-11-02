export type DatabaseType = {
    data: [
        DatabaseUserType[],
    ]
}

export type DatabaseUserType = {
    id: number,
    attributes: {
        memberId: number,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        email: string,
        firstName: string,
        lastName: string,
        temperature: string,
        mode: string,
        cityOne: string,
        cityTwo: string,
        cityThree: string,
        password: string,
        picture: string,
    }
}