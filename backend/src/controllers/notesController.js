import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // fetch all notes by newest first
    res.status(200).json(notes);
  } catch (err) {
    console.error("Error in getAllNotes controller: ", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getSpecificNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note)
      return res
        .status(404)
        .json({ message: "Note with such ID does not exist" });

    console.log(note.title, note.content);
    res.status(200).json(note);
  } catch (error) {
    console.error("Bug in getSpecificNote.");
    res
      .status(500)
      .json({ message: "your getSpecificNote needs some repair." });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    console.log(title, content);

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note note found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "ID does not exist." });
    res.status(200).json({ message: "Deleted successfully!" });
  } catch (error) {
    console.error(
      "Noob this is not how you do it! deleteNote has some problem",
    );
    res.status.json("NOT DELETED! deleteNote is bugged.");
  }
};
