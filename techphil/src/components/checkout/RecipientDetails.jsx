export const RecipientDetails = () => {
  return (
    <section>
      <form className="flex flex-col gap-4 rounded-2xl shadow-lg bg-black p-5 ">
        <input
          type="text"
          placeholder="Enter your Full Name"
          className={inputStyle}
        />
        <input
          type="number"
          placeholder="Enter your Phone Number"
          className={inputStyle}
        />
        <input
          type="text"
          placeholder="Address line 1"
          className={inputStyle}
        />
        <input
          type="text"
          placeholder="address line 2"
          className={inputStyle}
        />
      </form>
    </section>
  );
};

//style
const inputStyle =
  "shadow px-6 md:px-12 lg:px-24 rounded-lg font-medium text-xl p-1";
