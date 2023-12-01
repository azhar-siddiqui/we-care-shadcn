const Login = () => {
  return (
    <div className="w-full h-screen bg-[#f1f4f8] mx-auto flex items-center">
      <div className="hidden md:block  max-w-[400px] w-full h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 border-2"></div>
      <div className="m-auto">
        <div className="w-[500px] bg-white p-10 rounded-lg shadow-lg">
          <form className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl font-medium">Sign in</h1>
            <h6 className="text-neutral-500 text-base mt-[-10px]">
              Fill in the fields below to sign into your account.
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
