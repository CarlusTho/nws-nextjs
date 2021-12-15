import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as Yup from "yup";

export default function Home() {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Le titre est requis"),
    firstName: Yup.string().required("Le prénom est obligatoire"),
    lastName: Yup.string().required("Le nom est obligatoire"),
    dateBook: Yup.string()
      .required("La date de la réservation est obligatoire")
      .matches(
        /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Cette date n'est pas valide"
      ),
    email: Yup.string()
      .required("L'email est obligatoire")
      .email("Votre adresse est invalide"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Veuillez accepter les conditions générales"
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  return (
    <>
      <Head>
        <title>NWS - nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card m-3">
        <h1 className="card-header"> Formulaire de réservation </h1>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-row">
      <div className="form-group col">
        <label>Titre</label>
        <select name="title"
        {...register("title")}
        className={`form-control ${errors.title ? "is-invalid" : "" }`}
        >
        <option value=""></option>
        <option value="M."></option>
        <option value="Mme"></option>
        </select>
        <div className="invalid-feedback">{errors.title?.message}</div>
      </div>
      <div className="form-group col-5">
        <label>Prénom</label>
        <input
        name="firstName"
        type="text"
        {...register}
      </div>
    </div>


          </form>
        </div>
      </div>
    </>
  );
}
