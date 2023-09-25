import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container } from "./styles";
import { useRouter } from "next/router";
import { API_URL, SECURITY_URL } from "@/environments/urls";

/* eslint-disable @next/next/no-img-element */
const ProfileInfos = () => {
  const [subscribes, setSubscribes] = useState([]);
  const [products, setProducts] = useState<any[]>([]);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

    const getSubscribes = async () => {
      try {
        const response = await axios.get(`${API_URL}/orders/byUser`, {
          headers: {
            authorization: token,
          },
        });

        const responseName = response.data.orders.map(async(order: any) => {
          const product = await axios.get(`${API_URL}/products/byId/${order.product_id}`, {
            headers: {
              authorization: token,
            },
          });

          if (product.data.product.id === order.product_id) {
            return product.data.product.name;
          }
        });
  
        const responseProducts = await Promise.all(responseName);

        setProducts(responseProducts);
        setSubscribes(response.data.orders);
        console.log(responseProducts);
        console.log(response.data.orders);
      } catch (error) {
        console.log(error);
      }
    };

    const getUser = async () => {
      try {
        const response = await axios.post(`${SECURITY_URL}/security/verify-jwt`, {
          token,
        });
  
        setUserName(response.data.payload.name);
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    };

    getUser();
    getSubscribes();
  }, []);

  return (
    <Container>
      <div className="titleContainer">
        <img
          src="https://images.macrumors.com/t/n4CqVR2eujJL-GkUPhv1oao_PmI=/1600x/article-new/2019/04/guest-user-250x250.jpg"
          alt="user image"
        />
        <h1>Olá, {userName}!</h1>
      </div>
      <div className="productContainer">
        <h2>Minhas Assinaturas</h2>
        <div className="productLimit">
          {subscribes.map((subscribe: any, index: number) => {
            return (
              <ProductCard
                key={index}
                name={products[index]}
                image={subscribe.image}
                total={subscribe.total}
                quantity={subscribe.quantity}
                profile={true}
                showSpan={true}
                spanPhrase={subscribe.status}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ProfileInfos;
