import React, { Fragment, useEffect } from 'react'
import { getProducts, deleteProduct } from '../Actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DELETE_PRODUCT_RESET } from '../Constants/productsConstant'
import { useAlert } from 'react-alert'
import Loader from './loader'
import { Carousel } from "react-bootstrap";


const AllProducts = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const { products, loading } = useSelector(state => state.products);
    const { isDeleted } = useSelector(state => state.productDeleted);

    useEffect(() => {
        dispatch(getProducts());

        if (isDeleted) {
            alert.success('Product deleted successfully');
            dispatch({ type: DELETE_PRODUCT_RESET })
        }
    }, [isDeleted, alert])

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
    }
    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <div className="row">
                        <div className="col">
                            <h1 >All Products </h1>

                        </div>
                        <div className="col my-2 margin-left" style={{ marginInlineStart: 450 }}>
                            <Link to={`/products/create`} className="btn btn-primary" >Product Action</Link>
                            <Link to={`/category/`} className="btn btn-warning ml-2" >Category Action</Link>
                        </div>



                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">productImage</th>
                                    <th scope="col">ProductId</th>
                                    <th scope="col">ProductName</th>
                                    <th scope="col">CategoryName</th>
                                    <th scope="col">CategoryId</th>
                                    <th scope="col"> Actions </th>
                                </tr>
                            </thead>

                            {

                                <tbody>
                                    {products && products.map(product => (
                                        <tr key={product.id}>
                                            
                                            <td><img src={product.image} alt={product.title}
                                                                className="d-block  " /></td>

                                            <th scope="row"> {product._id}</th>
                                            <td>{product.ProductName}</td>
                                            <td>{product.CategoryName}</td>
                                            <td>{product.CategoryId}</td>
                                            <td>
                                                <Fragment>
                                                    <Link to={`/product/${product._id}`}
                                                        className="btn btn-primary py-1 px-2">
                                                        <i className="fa fa-pencil"></i>
                                                    </Link>
                                                    <button className="btn btn-danger py-1 px-2 ml-2"
                                                        onClick={() => deleteProductHandler(product._id)}>
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </Fragment>
                                            </td>
                                        </tr>

                                    ))}

                                </tbody>

                            }


                        </table>
                    </div>
                </Fragment>
            )}

        </Fragment>
    )


}
export default AllProducts







