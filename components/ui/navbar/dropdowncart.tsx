export default function Cart() {
    return(<div className="card justify-content-center d-flex align-items-center bg-transparent">
        <picture className="w-100 d-block mb-2 mx-auto">
          <img
            className="w-100 rounded"
            title=""
            src="{{ img }}"
            alt="{{config.defaultImgAlt}}"
          />
        </picture>
        <a className="fw-bolder link-cover" href="{{webRoot}}/category.html">
          {/*titulo*/}
        </a>
      </div>
      );
  };