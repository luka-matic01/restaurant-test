// MyForm.js
import { useForm, Controller } from "react-hook-form";

const ContactForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto  rounded-md flex flex-col"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            VAŠE IME
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]"
            id="grid-first-name"
            type="text"
            placeholder="Ime"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            VAŠE PREZIME
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]"
            id="grid-last-name"
            type="text"
            placeholder="Prezime"
          />
        </div>
      </div>
      <div class="flex flex-wrap space-y-6 -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            EMAIL
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]"
            id="grid-password"
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            NASLOV PORUKE
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]"
            id="grid-password"
            type="text"
            placeholder="Naslov poruke"
          />
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            PORUKA
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#2ebea5]"
            id="grid-password"
            type="text"
            placeholder="Poruka"
          />
        </div>
      </div>
      <button className="w-full rounded-md bg-[#2ebea5] px-6 lg:px-12 py-2 text-white hover:bg-[#36394c]">
        POŠALJITE PORUKU
      </button>
    </form>
  );
};

export default ContactForm;
