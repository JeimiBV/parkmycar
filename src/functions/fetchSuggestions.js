export const fetchCreateSuggestion = async (description) => {
  const suggestion = {
    description: description,
  };
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/suggestions",
    {
      method: "POST",
      body: JSON.stringify(suggestion),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return await response.json();
};

export const fetchGetSuggestions = async () => {
  const response = await fetch(
    "http://parkmycar-001-site1.atempurl.com/suggestions"
  );
  return await response.json();
};
