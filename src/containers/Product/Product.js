import React, { Component } from 'react';
import classNames from 'classnames';
import { FilterPage,
		ProductFilters,
		ProductColumes,
		ProductManageDynamicAttribute,
		FilterActionSelect,
		FilterId
		} from 'components';

export default class Product extends Component {
  render() {
    const styles = require('./product.scss');

    return (
    	<div className="container-fluid">
    		<div className="row">
		    	<div className={ classNames(styles['product-view']) }>
			    	<header className={ styles['page-header']}>
			    		<div className={ styles['page-title']}>
			        		<h1 className={ styles.header }><strong>Product</strong></h1>
			        		<div className={ styles['page-breadcrumb']}>
                				<span>Products</span>
                			</div>
                  		</div>
			    		<div className={ styles['page-filter']}>
							<ul className={ styles['list-filter']}>
								<ProductFilters/>
								<ProductColumes/>
								<ProductManageDynamicAttribute/>
								<li className={ classNames( styles.filter, styles['add-product'])}>
									<div className="dropdown">
										<button className={ classNames(styles['btn-blue'], 'btn', 'btn-default', 'dropdown-toggle')} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									    	Add Products
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
											<li><a href="#">Action</a></li>
											<li><a href="#">Another action</a></li>
											<li><a href="#">Something else here</a></li>
											<li role="separator" className="divider"></li>
											<li><a href="#">Separated link</a></li>
										</ul>
									</div>
								</li>
							</ul>
			    		</div>
			    	</header>
			    	<section className={ styles['wrapper-content']}>
			    		<div className={ styles.content}>
			    			<div className={ styles['wrapper-product-tab']}>
								<ul className="nav nav-tabs">
								 	<li role="presentation" className={ classNames(styles['product-tab'], styles['tab-active'], 'active' )}><a href="#">Product</a></li>
								 	<li role="presentation" className={ classNames(styles['product-tab'])}><a href="#">Parent Produt</a></li>
								 	<li role="presentation" className={ classNames(styles['product-tab'])}><a href="#">GWP</a></li>
								</ul>
			    			</div>
			    			<div className={ classNames(styles['filter-product'])}>
			    				<div className={ classNames(styles['wrapper-filter'])}>
			    					<div className={ styles['filter-left']}>
										<FilterActionSelect title={ "Action" } selectOption={ ['Delete Product'] }/>
                                        <FilterId title={ "Product ID" } selectOption={ ['Product ID', 'SKU No.', 'Product Name', 'Brandname', 'Batch No.'] }/>
			    					</div>
			    					<div className={ classNames(styles['filter-right']) }>
				    					<FilterPage/>
			    					</div>
			    				</div>
			    			</div>
			    			<div className={ styles['table-detail'] }>
			    				<div className={ styles['tab-content'] }>
									<table className="table table-striped">
										<thead>
									    	<tr className={ styles['title-table']}>
									    		<th className={ styles['product-checkbox'] }><input type="checkbox"/></th>
									    		<th className={ styles['product-id'] }>ID</th>
									    		<th className={ styles['product-thumbnail'] }>Thumbnail</th>
									    		<th className={ styles['product-sku'] }>SKU</th>
									    		<th className={ styles['product-name'] }>Name</th>
									    		<th className={ styles['product-type'] }>Type</th>
									    		<th className={ styles['product-price'] }>Price</th>
									    		<th className={ styles['product-qty'] }>Qty</th>
									    		<th className={ styles['produt-brand'] }>Brand</th>
									    		<th className={ styles['product-merchiandise'] }>Batch No.</th>
									    		<th className={ styles['product-visibility'] }>Visibility</th>
									    		<th className={ styles['product-status'] }>Status</th>
									    	</tr>
										</thead>
										<tbody>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>503576</td>
									    		<td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>8169513</td>
									    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
									    		<td>-</td>
									    		<td>11,800.00 THB</td>
									    		<td>172</td>
									    		<td>EMPORIO ARMANI</td>
									    		<td>xxxxxx</td>
									    		<td>Yes</td>
									    		<td>Enable</td>
									    	</tr>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>503576</td>
									    		<td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>8169513</td>
									    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
									    		<td>Child Product </td>
									    		<td>11,800.00 THB</td>
									    		<td>172</td>
									    		<td>EMPORIO ARMANI</td>
									    		<td>xxxxxx</td>
									    		<td>Yes</td>
									    		<td>Enable</td>
									    	</tr>
									    	<tr>
									    		<td><input type="checkbox"/></td>
									    		<td>503576</td>
									    		<td><img src="http://via.placeholder.com/50x50"/></td>
									    		<td>8169513</td>
									    		<td>EMPORIO ARMANI CLASSIC WATCH</td>
									    		<td>-</td>
									    		<td>11,800.00 THB</td>
									    		<td>172</td>
									    		<td>EMPORIO ARMANI</td>
									    		<td>xxxxxx</td>
									    		<td>Yes</td>
									    		<td>Enable</td>
									    	</tr>
										</tbody>
									</table>
								</div>
								<div className="row">
									<div className={ classNames(styles['filter-bottom'])}>
										<FilterPage/>
									</div>
								</div>
			    			</div>
			    		</div>
			    	</section>
		    	</div>
    		</div>
    	</div>
	);
  }
}
