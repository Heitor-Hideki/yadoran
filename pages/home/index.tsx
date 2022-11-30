import { Banner } from "components/Banner/Banner";
import { Heading } from "components/Heading/Heading";
import { PageLayout } from "components/PageLayout/PageLayout";
import { Text } from "components/Text/Text";
import { House, Money } from "phosphor-react";

export default function SignUpPage () {
  return (
    <PageLayout PageIcon={<House size={32}/>} PageName={'Home'}>
        <div className="grid overflow-hidden grid-cols-3 grid-rows-2 gap-2 mt-8">
            <div className="box row-span-2">
                <Banner.Root className="w-[600px] h-[700px]">
                    <Banner.Header title="Latest twitter posts"></Banner.Header>
                    <Banner.Frame url="https://twitter.com/smogonu"></Banner.Frame>
                </Banner.Root>
            </div>
            <div className="box col-start-2 col-span-2">
                <Banner.Root className="w-[1000px] h-[350px]">
                    <Banner.Header title="Forum"></Banner.Header>
                    <Banner.Frame url="https://twitter.com/smogonu"></Banner.Frame>
                </Banner.Root>
            </div>
            <div className="box col-start-2 col-span-2">
                <Banner.Root className="w-[1000px] h-[350px]">
                    <Banner.Header title="News"></Banner.Header>
                    <Banner.Frame url="https://www.pokemon.com/us/pokemon-news/"></Banner.Frame>
                </Banner.Root>
            </div>
        </div>

      {/* <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 bg-slowpoke-pink-900 rounded w-fit">
          <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
              </li>
              <li className="mr-2">
                  <a href="#" className="flex flex-col items-center justify-center p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page"> <Money /> <Text size='sm'>Dashboard</Text> </a>
              </li>
              <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
              </li>
              <li className="mr-2">
                  <a href="#" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
              </li>
              <li>
                  <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
              </li>
          </ul>
      </div> */}
    </PageLayout>
  )
}
