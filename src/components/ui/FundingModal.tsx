import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { fundingSources } from "@/constants/Funding";
import clsxm from "@/lib/helpers/clsxm";

import ButtonLink from "../buttons/ButtonLink";

type FundingModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const FundingModal = ({ isOpen, handleClose }: FundingModalProps) => {
  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => handleClose()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsxm(
                  "bg-white dark:bg-errieblack-400",
                  "max-w-md rounded-lg p-6 md:p-4"
                )}
              >
                <div className="flex justify-between gap-2">
                  <Dialog.Title className="text-base font-normal md:text-lg">
                    Consider to support me to keep this site alive and updating
                    contents (or projects)🙏
                  </Dialog.Title>
                  <AiOutlineClose
                    size={32}
                    className={clsxm(
                      "hover:cursor-pointer hover:text-charcoal-200",
                      "dark:hover:text-charcoal-300"
                    )}
                    onClick={() => handleClose()}
                  />
                </div>
                <hr className="my-4 border" />
                <div className="mt-6 flex flex-wrap items-center justify-evenly gap-4">
                  {fundingSources.map((funding, index) => (
                    <ButtonLink
                      key={index}
                      variant="light"
                      className={clsxm("inline-flex w-full gap-3 md:w-auto")}
                      href={funding.link_route}
                    >
                      <funding.icon size={24} />
                      {funding.name}
                    </ButtonLink>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FundingModal;
