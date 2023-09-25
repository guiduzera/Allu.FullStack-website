import axios from "axios";
import { FilesDragAndDrop } from "./styles";
import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import { useRouter } from "next/router";
import { API_URL } from "@/environments/urls";
import toast from "react-hot-toast";

type File = [{ name: string }];

const DragAndDrop = () => {
  const router = useRouter();
  const fileTypes = ["JPG", "PNG", "PDF", "DOCX", "DOC"];
  const [file, setFile] = useState<File>();
  const handleChange = (file: any) => {
    setFile(file);
    console.log(file);
  };
  const handleConfirm = async () => {
    // pegar conteúdo do localstorage
    const stringCart = localStorage.getItem("cart");

    const cart = JSON.parse(stringCart || "{}");

    if (!file) {
      return;
    }

    try {
      await Promise.all(
        cart.map(async (item: any) => {
          await axios.post(
            `${API_URL}/orders/create`,
            {
              productId: item.id,
              document: file[0].name,
              total: item.price * item.quantity,
              image: item.image,
              quantity: item.quantity,
            },
            {
              headers: {
                authorization: localStorage.getItem("token"),
              },
            }
          );
        })
      );
      toast.success("Pedido realizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao enviar o arquivo");
    }

    //limpar o localstorage
    localStorage.setItem("cart", JSON.stringify([]));
    router.push("/");
  };
  return (
    <FilesDragAndDrop>
      <FileUploader
        handleChange={handleChange}
        name="file"
        required
        types={fileTypes}
        multiple={true}
        className="dropArea"
        children={
          <div className="FilesDragAndDrop__area">
            <p>Arraste e solte o arquivo aqui</p>
          </div>
        }
      />
      <p>{file ? `Arquivo: ${file[0].name}` : "Não há arquivos ainda"}</p>
      {file && (
        <button type="button" onClick={handleConfirm}>
          Confirmar
        </button>
      )}
    </FilesDragAndDrop>
  );
};

export default DragAndDrop;
