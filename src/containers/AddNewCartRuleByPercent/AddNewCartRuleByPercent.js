import React, { Component } from 'react';
import classNames from 'classnames';
import { Breadcrumb} from 'components';
import { SplitButton, MenuItem } from 'react-bootstrap';

export default class AddNewCartRuleByPercent extends Component {
    render() {
      const styles = require('./addNewCartRuleByPercent.scss');
      return (
        <div className="container-fluid">
    		<div className="row">
                <div className={ classNames(styles['add-new-cart-rule-by-percent-view']) }>
                    <header className={ styles['page-header']}>
                        <div className={ styles['page-title']}>
                            <h1 className={ styles.header }><strong>Add New Cart Rule</strong></h1>
                            <Breadcrumb breadcrumb={ "Marketing > Add New Cart Rule" }/>
                        </div>
                        <div className={ styles['sub-menu']}>
                            <ul>
                                <li><a href="#"><i className="fa fa-chevron-left"></i> Back </a></li>
                                <li><a href="#"><i className="fa fa-eye"></i> Preview </a></li>
                                <li><a href="#"><i className="fa fa-floppy-o"></i> Save and Exit </a></li>
                            </ul>
                        </div>
                    </header>
                    <div className={styles['panel-left']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>Set Campaign Info</p>
                            <p className={styles['list-menu']}>- End of the Bill Discount (0)</p>
                            <ul className={styles['gwp-globle-menu']}>
                                <li className={ classNames( styles['gwp-globle-menu-list'], styles['menu-active'] ) }><label><input type="radio" >By Percent Discount</input></label></li>
                                <li className={ styles['gwp-globle-menu-list'] }><label><input type="radio">By Amount Discount</input></label></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['panel-right']}>
                        <div className={styles['panel-content']}>
                            <p className={styles['list-menu']}>End of the Bill Discount By Percent Discount</p>
                            <div className={styles['form-group']}>
                                <label className={styles['control-label']}>Turn On/Off</label>
                                <div className={styles['control-on-off']}>
                                    <label className="radio-inline"><input type="radio">Off</input></label>
                                    <label className="radio-inline"><input type="radio">On</input></label>
                                </div>
                                <hr></hr>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Set Condition</label>
                                </div>
                                <div className={ classNames(styles['control-optional'], styles['top-border'])}>
                                    <div className={styles['content-option']}>
                                        <label>Get Discount</label>
                                        <label>
                                            <input type="text" className="form-control"/>
                                        </label>
                                        <label>% at the end of Bill discount</label>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Calculate by</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles['control-on-off']}>
                                            <label className="radio-inline"><input type="radio">Net Revenues</input></label>
                                            <label className="radio-inline"><input type="radio">Gross Revenues</input></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to include</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>Product is </label>
                                            <label>
                                                <SplitButton title="none" pullRight id="split-button-pull-right">
                                                    <MenuItem eventKey="1">By Category</MenuItem>
                                                    <MenuItem eventKey="2">By Brands</MenuItem>
                                                    <MenuItem eventKey="3">By Each Item</MenuItem>
                                                    <MenuItem eventKey="4">By Specific Group</MenuItem>
                                                    <MenuItem eventKey="4">By Mass Upload</MenuItem>
                                                </SplitButton>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Result of included </label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                        <div className={styles['divied-blue']}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Select products to exclude</label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <div className={styles.qty}>
                                            <label>Product is </label>
                                            <label>
                                                <SplitButton title="none" pullRight id="split-button-pull-right">
                                                    <MenuItem eventKey="1">Action</MenuItem>
                                                    <MenuItem eventKey="2">Another action</MenuItem>
                                                    <MenuItem eventKey="3">Something else here</MenuItem>
                                                    <MenuItem eventKey="4">Separated link</MenuItem>
                                                </SplitButton>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                    <label className={styles['control-label']}>Result of excluded </label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['content-option']}>
                                        <ul>
                                            <li>by Category :  --</li>
                                            <li>by Brand :  --</li>
                                            <li>by SKU :  --</li>
                                            <li>by Specific Group :  --</li>
                                            <li>by Mass Upload :  --</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={ classNames(styles['control-group'], 'row') }>
                                <div className={styles['control-label']}>
                                        <label className={styles['control-label']}></label>
                                </div>
                                <div className={styles['control-optional']}>
                                    <div className={styles['border-bottom']}></div>
                                </div>
                            </div>
                            <div className={styles['divied-blue']}></div>
                            <div className={styles['add-new-box']}>
                                <a href="#"><i className="fa fa-plus-circle"></i>Add New another Condition</a>
                            </div>
                        </div>
                    </div>
                    <button className={ classNames(styles['btn-blue'], 'btn', 'btn-default') }> Save</button>
                </div>
            </div>
        </div>
      );
    }
}
