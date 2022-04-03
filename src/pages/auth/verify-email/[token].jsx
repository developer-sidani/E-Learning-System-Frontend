import React, {
  useCallback, useEffect, useState, Fragment,
} from 'react'
import { useRouter } from 'next/router'
import CheckIcon from '@mui/icons-material/Check'
import ErrorIcon from '@mui/icons-material/Error'
import { Box, CircularProgress, Fab } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { Dialog, Transition } from '@headlessui/react'
import { verifyEmail } from '../../../api'
import { PageHeader } from '../../../components'

const VerifyEmail = () => {
  const router = useRouter()
  const { token } = router.query
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState()

  const verifyEmailCallback = useCallback(
    async (verificationToken) => {
      try {
        const res = await verifyEmail({
          verificationToken,
        })
        console.log({ res })
        setResponse(res)
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    if (token) {
      verifyEmailCallback(token)
    }
  }, [token])
  const success = response?.res?.statusCode === 200
  const buttonSx = {
    ...(success ? {
      bgcolor: green[700],
      '&:hover': {
        bgcolor: green[700],
      },
    } : {
      bgcolor: red[700],
      '&:hover': {
        bgcolor: red[700],
      },
    }),
  }
  const handleSubmit = useCallback((success) => {
    if (success) {
      router.push('/auth/sign-in')
    } else {
      router.push('/auth/request-verification')
    }
  }, [response])
  return (
    <>
      <PageHeader title="Learn+ | Verify Email" />
      <Transition.Root show as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => {}}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ m: 1, position: 'relative' }}>

                          <Fab
                            className="group"
                            aria-label="save"
                            color="primary"
                            sx={buttonSx}
                          >
                            {!loading && (
                            // eslint-disable-next-line react/jsx-no-useless-fragment
                            <>
                              {success ? (
                                <CheckIcon className="h-6 w-6 text-green-700 group-hover:text-white" aria-hidden="true" />
                              ) : (
                                <ErrorIcon
                                  className="h-6 w-6 text-red-700 group-hover:text-white"
                                  aria-hidden="true"
                                />
                              )}
                            </>
                            )}
                          </Fab>
                        {loading && (
                          <CircularProgress
                            size={68}
                            sx={{
                              color: green[500],
                              position: 'absolute',
                              top: -6,
                              left: -6,
                              zIndex: 1,
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    {loading ? (
                      <div className="flex flex-row justify-center align-center mb-4">
                        <div className="h-2.5 text-center text-lg leading-6  bg-slate-700 rounded w-1/2" />
                      </div>
                    ) : (
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {success ? 'Email Verified Successfully' : 'Expired Link'}
                      </Dialog.Title>
                    )}
                    <div className="mt-2">
                      {loading ? (
                        <div className="flex flex-col justify-center align-center flex-wrap gap-2">
                          <div className="h-1.5 bg-slate-700 rounded w-3/4" />
                          <div className="h-1.5 bg-slate-700 rounded w-3/4" />
                          <div className="h-1.5 bg-slate-700 rounded w-3/4" />
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">
                          {success ? 'Your email was verified successfully. You can sign in now with your email'
                            : 'The request was expired, you should send another request to verify your email'}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    disabled={loading}
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => handleSubmit(success)}
                  >
                    {loading ? (
                      '...'
                    ) : (
                      // eslint-disable-next-line react/jsx-no-useless-fragment
                      <>
                        {success ? 'Sign In'
                          : 'Resend verification'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default VerifyEmail
