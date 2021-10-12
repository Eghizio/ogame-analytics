export const getJSON = async <T>(url: string) => {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Network response was not ok");
    
    const data: T = await response.json();

    return data;
};