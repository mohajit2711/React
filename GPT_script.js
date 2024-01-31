exports.GenerateText = functions
  .region("asia-south1")
  .https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");

    const { theme, difficulty, num_words} = JSON.parse(req.body);
    const openai = new OpenAI();

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `I am going to give you 3 values, a theme, it's difficulty and a number. 
            Create words and hints respectively according to the difficulty level given for a 
            crossword and give it to me in a JSON format of only the values {word} and {hints}. 
            The theme is ${theme}, The difficulty is ${difficulty} and give me ${num_words} words and hints. 
            Only give me the crossword array in the output nothing else.`,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      res.send(completion.choices[0].message.content);
      //   console.log(completion.choices[0].message.content);
    } catch (error) {
      res.send(error);
    }
  });