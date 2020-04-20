import React from 'react'
import LazyLoad from 'react-lazyload'

const card = props => {
    return(
        <div className="card mb-4 ml-auto mr-auto" style={{width: '18rem'}}>
            <LazyLoad>
                <img src={props.image} className="card-img-top" alt="..." />
            </LazyLoad>
            <div className="card-body ">
                <table>
                    <tbody>
                    <tr>
                        <td>Views</td>
                        <td className="text-right pl-5"><b><span className="text-bold text-black-50">{props.views}</span></b></td>
                    </tr>
                    <tr>
                        <td>Likes</td>
                        <td className="text-right"><b><span className="text-primary text-black-50">{props.likes}</span></b></td>
                    </tr>
                    <tr>
                        <td>Downloads</td>
                        <td className="text-right"><b><span className="text-black-50">{props.downloads}</span></b></td>
                    </tr>
                    <tr>
                        <td>Favourites</td>
                        <td className="text-right"><b><span className="text-danger text-black-50">{props.favourites}</span></b></td>
                    </tr>
                    </tbody>
                </table>
                <a href={props.preview} target="_blank" className="btn btn-primary">Preview</a>
            </div>
        </div>
    );
}

export default card