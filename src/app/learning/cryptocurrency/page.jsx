import React from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaPizzaSlice,
  FaCoins,
  FaShieldAlt,
} from "react-icons/fa";

export default function Cryptocurrencies() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
        <FaBitcoin className="text-orange-500" />
        <span>Cryptocurrency</span>
      </h1>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner flex items-start space-x-4">
        <FaCoins className="text-blue-500 w-10 h-10" />
        <p className="text-lg text-gray-700">
          Picture a world where you can send money to anyone, anywhere in the
          world, instantly and without the need for a bank. Sounds futuristic,
          right? Well, that’s the promise of cryptocurrency! Cryptocurrencies
          are digital or virtual currencies that use cryptography for security.
          They operate on decentralized networks based on blockchain technology,
          making them a groundbreaking innovation in the financial world.
        </p>
      </div>

      <div className="mb-6 p-4 bg-white rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaCoins className="text-green-500" />
          <span>What Is Cryptocurrency? 🔒</span>
        </h2>
        <p className="text-lg text-gray-700">
          Cryptocurrency is a type of digital or virtual currency that relies on
          cryptographic techniques to secure transactions and control the
          creation of new units. Unlike traditional money issued by governments,
          cryptocurrencies are decentralized and operate on a technology called
          blockchain. Blockchain is like a public ledger that records all
          transactions across a network of computers.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          The most famous cryptocurrency is Bitcoin, but there are thousands of
          others, each with its own unique features. Some are designed to be
          used as digital cash, while others serve different purposes, like
          powering smart contracts or providing privacy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaEthereum className="text-purple-500" />
            <span>How Does Cryptocurrency Work? ⚙️</span>
          </h3>
          <p className="text-lg text-gray-700">
            When you use cryptocurrency, you’re engaging in a transaction on a
            blockchain network. Imagine blockchain as a giant book where every
            transaction is written down for everyone to see. This book is
            distributed across many computers (nodes) around the world, and
            every time a transaction is made, it’s recorded in the blockchain.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            For example, if you send Bitcoin to a friend, your transaction is
            verified by the network and added to the blockchain. Once it’s
            recorded, it can’t be changed or deleted, making it incredibly
            secure and transparent.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
            <FaCoins className="text-yellow-500" />
            <span>Popular Cryptocurrencies 💰</span>
          </h3>
          <p className="text-lg text-gray-700">
            Here are some of the most well-known cryptocurrencies:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
            <li>
              <strong>Bitcoin (BTC):</strong> The first and most famous
              cryptocurrency. Bitcoin was created in 2009 by an unknown person
              (or group of people) using the pseudonym Satoshi Nakamoto. It’s
              often referred to as "digital gold" because of its store-of-value
              properties.
            </li>
            <li>
              <strong>Ethereum (ETH):</strong> More than just a cryptocurrency,
              Ethereum is a platform that allows developers to build and deploy
              smart contracts and decentralized applications (DApps). Ether
              (ETH) is the cryptocurrency used on the Ethereum network.
            </li>
            <li>
              <strong>Ripple (XRP):</strong> Ripple is designed for fast and
              low-cost international money transfers. It’s used by financial
              institutions as a bridge currency for cross-border transactions.
            </li>
            <li>
              <strong>Litecoin (LTC):</strong> Created by Charlie Lee in 2011,
              Litecoin is often referred to as the silver to Bitcoin’s gold.
              It’s similar to Bitcoin but offers faster transaction times and a
              different hashing algorithm.
            </li>
            <li>
              <strong>Cardano (ADA):</strong> Cardano is a blockchain platform
              that aims to be more secure and scalable than earlier blockchains
              like Ethereum. Its cryptocurrency, ADA, is used for staking and
              transaction fees within the network.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 flex items-center space-x-2">
          <FaShieldAlt className="text-red-500" />
          <span>Why Invest in Cryptocurrency? 🚀</span>
        </h3>
        <p className="text-lg text-gray-700">
          Cryptocurrency has attracted many investors due to its unique
          benefits:
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2">
          <li>
            <strong>High Potential Returns:</strong> Cryptocurrencies have the
            potential for significant price increases. Bitcoin, for example, was
            worth just a few cents when it was first introduced but has since
            reached prices in the tens of thousands of dollars.
          </li>
          <li>
            <strong>Decentralization:</strong> Unlike traditional currencies,
            cryptocurrencies aren’t controlled by any central authority, like a
            government or bank. This can provide more financial freedom and
            lower transaction costs.
          </li>
          <li>
            <strong>Innovation:</strong> Cryptocurrencies are at the cutting
            edge of financial technology. Investing in them gives you a stake in
            the future of finance, as new applications and innovations continue
            to emerge.
          </li>
          <li>
            <strong>Security and Transparency:</strong> The blockchain
            technology that underpins cryptocurrencies is incredibly secure.
            Transactions are recorded in a public ledger that anyone can verify,
            reducing the risk of fraud.
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaPizzaSlice className="text-yellow-500" />
          <span>Fun Example: The Pizza Story 🍕</span>
        </h3>
        <p className="text-lg text-gray-700">
          Did you know that one of the first real-world transactions using
          Bitcoin was for two pizzas? Back in 2010, a developer paid 10,000 BTC
          for two pizzas. At the time, that was worth about $41. Today, those
          pizzas would be worth millions of dollars! This story highlights both
          the potential and the volatility of cryptocurrency.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center space-x-2">
          <FaCoins className="text-green-500" />
          <span>Getting Started with Cryptocurrency 🌐</span>
        </h3>
        <p className="text-lg text-gray-700">
          If you’re interested in diving into the world of cryptocurrencies,
          start by doing your research. Understand the different types of
          cryptocurrencies and their use cases.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Next, choose a secure cryptocurrency exchange where you can buy and
          sell digital currencies. Consider using a hardware wallet to store
          your cryptocurrencies securely.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Remember, investing in cryptocurrencies is speculative and should only
          be done with money you can afford to lose. Diversify your investments
          and be prepared for volatility.
        </p>
      </div>
    </div>
  );
}
