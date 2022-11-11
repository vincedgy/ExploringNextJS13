import Link from "next/link";
import "../../../styles/output.css";
import Note from "../note";

async function getNote(noteId: String) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
      next: {revalidate: 10}
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotesPage({params}: any) {
  const note = await getNote(params.id);
  
  return (
    <>
      <h1 className="pageTitle">Notes/{params.id}</h1>
      <div>
        <div className="bt-4">
          <Note note={note} />
        </div>
      </div>
    </>
  );
}


