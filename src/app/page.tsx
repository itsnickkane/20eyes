'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
           <a
            href={ONCHAINKIT_LINK}
            title="20Eyes"
            target="_blank"
            rel="noreferrer"
          >
          20👀
          </a>
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
        <div className="flex h-[450px] w-[450px] max-w-full items-center justify-center rounded-xl bg-[#030712]"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect x='0' y='0' width='24' height='24' fill='#a2baff'/><rect x='0' y='17' width='24' height='8' fill='#86b4bb'/><rect x='0' y='17' width='24' height='1' fill='#86b4bb'/><rect x='0' y='18' width='24' height='1' fill='#86b4bb'/><rect x='12' y='12' width='1' height='5' fill='#306141'/><rect x='11' y='11' width='1' height='1' fill='#83376e'/><rect x='12' y='11' width='1' height='1' fill='#83376e'/><rect x='13' y='11' width='1' height='1' fill='#83376e'/></svg>>
        </div>
        </div>
        {address ? (
          <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to transact"
          />
        )}
      </section>
      <Footer />
    </div>
  );
}
