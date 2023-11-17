// MyForm.js
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (errors) {
      const timeoutId = setTimeout(() => {
        clearErrors(); // Reset the form and clear errors
      }, 5000); // 5000 milliseconds (5 seconds)
      console.log("hi");
      // Cleanup the timeout to avoid unnecessary side effects
      return () => clearTimeout(timeoutId);
    }
    return () => clearTimeout(timeoutId);
  }, [errors, clearErrors]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto  rounded-md flex flex-col"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            VAŠE IME
          </label>
          <input
            {...register("ime", { required: "Ime je obavezno." })}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200"
             rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]`}
            type="text"
            placeholder="Ime"
          />
          {errors.ime && (
            <p className="text-red-500 mt-1 text-xs italic">
              {errors.ime.message}
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            VAŠE PREZIME
          </label>
          <input
            {...register("prezime", {
              required: "Prezime je obavezno.",
            })}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]`}
            type="text"
            placeholder="Prezime"
          />
          {errors.prezime && (
            <p className="text-red-500 mt-1 text-xs italic">
              {errors.prezime.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap space-y-6 -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            EMAIL
          </label>
          <input
            {...register("email", {
              required: "Email je obavezan.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Unesite ispravan Email format.",
              },
            })}
            className={`appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200
   rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]`}
            type="text"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            NASLOV PORUKE
          </label>
          <input
            {...register("naslovPoruke", {
              required: "Naslov poruke je obavezan.",
            })}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 borderborder-gray-200
             rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]`}
            type="text"
            placeholder="Naslov poruke"
          />
          {errors.naslovPoruke && (
            <p className="text-red-500 text-xs italic">
              {errors.naslovPoruke.message}
            </p>
          )}
        </div>
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            PORUKA
          </label>
          <input
            {...register("poruka", { required: "Poruka je obavezna." })}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
             rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]`}
            type="text"
            placeholder="Poruka"
          />
          {errors.poruka && (
            <p className="text-red-500 text-xs italic">
              {errors.poruka.message}
            </p>
          )}
        </div>
      </div>

      <button className="w-full rounded-md bg-[#2ebea5] px-6 lg:px-12 py-2 text-white hover:bg-[#36394c]">
        POŠALJITE PORUKU
      </button>
    </form>
  );
};

export default ContactForm;
