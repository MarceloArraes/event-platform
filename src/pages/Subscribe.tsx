import {useState, FormEvent} from "react";
import { Logo } from "../components/Logo";
//import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";


/*   const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
  `; */

function Subscribe() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //const [createSubscriber, { data, loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);
  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email, name);
    await createSubscriber({ variables: { email, name } });
    navigate("/event");
  }
  
  

  return (
    <div className="flex flex-col items-center min-h-screen bg-blur bg-cover bg-no-repeat">
      <div className="w-full max-w-[1100px] justify-between flex items-center mt-20 mx-auto">
        <div className="flex-1 max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Increva-se gratuitamente
          </strong>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Seu nome Completo"
              className="bg-gray-900 rounded px-5 h-14"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Seu Email"
              className="bg-gray-900 rounded px-5 h-14"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="disabled:opacity-50 mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
     
      <img src="src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  );
}

export default Subscribe;
