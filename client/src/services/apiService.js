const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    try {
        const sushi = await fetch(`${baseUrl}/sushi`);
        const drinks = await fetch(`${baseUrl}/drinks`);
        const sauce = await fetch(`${baseUrl}/sauce`);
        const result1 = await sushi.json();
        const result2 = await drinks.json();
        const result3 = await sauce.json();

        return [...result1, ...result2, ...result3];
    } catch (error) {
        console.log(error);

    }

};

export const getAllSushi = async () => {
    try {
        const response = await fetch(`${baseUrl}/sushi`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

};

export const getAllDrinks = async () => {
    try {
        const response = await fetch(`${baseUrl}/drinks`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

};

export const getAllSauce = async () => {
    try {
        const response = await fetch(`${baseUrl}/sauce`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

};

export const getOneSushi = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/sushi/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

};

export const getOneDrink = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/drinks/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

};

export const getOneSauce = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/sauce/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }

};

export const likeSushi = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/sushi/${id}/like`,
            {
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        return response;
    } catch (error) {
        console.log(error);
    }

}

export const unlikeSushi = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/sushi/${id}/unlike`,
            {
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }

}

export const order = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/users/order`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }

}

export const postComment = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/comments`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }

}

export const getAllComments = async () => {
    try {
        const response = await fetch(`${baseUrl}/comments`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }


};

export const deleteComment = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/comments/${id}`,
            {
                method: "DELETE",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateComment = async (id, data) => {
    try {
        const response = await fetch(`${baseUrl}/comments/${id}`,
            {
                method: "PUT",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const likeComment = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/comments/${id}/like`,
            {
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const unlikeComment = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/comments/${id}/unlike`,
            {
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}