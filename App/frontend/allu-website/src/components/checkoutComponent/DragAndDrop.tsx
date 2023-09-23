import { FilesDragAndDrop } from "./styles";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { useRouter } from "next/router";

type File = [{ name: string }]

const DragAndDrop = () => {
  const router = useRouter();
  const fileTypes = ["JPG", "PNG", "PDF", "DOCX", "DOC"];
  const [file, setFile] = useState<File>();
  const handleChange = (file: any) => {
    setFile(file);
    console.log(file);
  };
  const handleConfirm = () => {
    //enviar para o backend

    //limpar o localstorage
    localStorage.setItem("cart", JSON.stringify([]));
    router.push("/");
  };
  return (
    <FilesDragAndDrop>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={true} />
      <p>{file ? `Arquivo: ${file[0].name}` : "Não há arquivos ainda"}</p>
      {file && <button type="button" onClick={handleConfirm}>Confirmar</button>}
    </FilesDragAndDrop>
  );
};

export default DragAndDrop;