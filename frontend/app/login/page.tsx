export default function Login() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/login.png"
        alt="Background"
        className="absolute h-full w-full object-cover object-center"
      />
      <div className="relative z-10 flex h-screen items-center justify-center">
        <div className="w-[400px] h-[550px] border border-gary-700 bg-[#171717]/90 p-10 shadow-2xl">
          <h1 className="text-center text-[25px] font-black uppercase text-[#ff9999]">
            NOIR CINEMA
          </h1>

          <p className="mt-1 text-center text-[10px] uppercase tracking-[3px] text-gray-400">
            Premium Desktop Experience
          </p>
          {/* EMAIL address */}
          <div className="mt-7">
            <label className="block text-[11px] uppercase tracking-[2px] text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full border-b border-gray-600 bg-transparent pb-1 text-white outline-none"
            />
            {/* PASSWORD */}
            <div className="mt-7">
              <label className="block text-[11px] uppercase tracking-[2px] text-gray-400">
                Password
              </label>

              <input
                type="password"
                className="mt-1 w-full border-b border-gray-600 bg-transparent pb-1 text-white outline-none"
              />
              {/* Remember Me + Forgot Password +Login Button  */}
              <div className="mt-6 flex items-center justify-between">
                <label className="flex items-center gap-2  whitespace-nowrap text-[11px] uppercase text-gray-400">
                  <input type="checkbox" className="h-4 w-4 accent-red-600" />
                  Remember Me
                </label>

                <button className="text-[11px] uppercase text-[#ff9999] ">
                  Forgot Password?
                </button>
              </div>
              <button className="mt-8 w-full bg-red-600 py-2.5 text-sm font-bold uppercase tracking-[2px] text-white">
                ENTER THE VOID
              </button>

              {/* Divider */}
              <div className="my-8 flex items-center">
                <div className="h-px flex-1 bg-gray-700"></div>

                <span className="mx-3 text-[10px] uppercase tracking-[2px] text-gray-500">
                  OR SIGN IN WITH
                </span>

                <div className="h-px flex-1 bg-gray-700"></div>
              </div>

              {/*  Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="border border-gray-700 py-3 text-[12px] font-semibold uppercase text-white hover:bg-white/10">
                  GOOGLE
                </button>

                <button className="border border-gray-700 py-3 text-[12px] font-semibold uppercase text-white hover:bg-white/10">
                  APPLE
                </button>
              </div>

              {/* Signup */}
              <p className="mt-8 text-center text-[12px] text-gray-400">
                New to NOIR?
                <span className="ml-1 cursor-pointer text-white hover:text-red-400">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
