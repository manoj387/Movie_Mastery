import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
      <div
        className="modal modal-alert bg-secondary py-5"
        // tabIndex="-1"
        role="dialog"
        id="loginModel"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header">
              <h5 className="modal-title">LOGIN</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 text-center">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn_style">Submit</button>
                <hr />

                <div className='icons_style'>
                  <Link href='#'>
                    <i className="bi bi-google"></i>
                  </Link>
                  <p className='mt-3 fs-5'>OR</p>
                  <Link href='#'>
                    <i className="bi bi-github"></i>
                  </Link>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default Login