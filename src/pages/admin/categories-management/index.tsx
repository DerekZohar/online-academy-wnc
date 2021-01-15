import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CategoryIcon from "@material-ui/icons/Category";
import EditIcon from "@material-ui/icons/Edit";
import Axios from "axios";
import { useSelector } from "react-redux";
import "./styles.css";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ClassIcon from "@material-ui/icons/Class";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function AdminCategories() {
  var NewCateName = "";
  var NewSubCate = "";
  const [CateID, setCateID] = useState("");
  const user = useSelector((state: any) => state.user.value);
  const [CategoryOpen, setCategoryOpen] = useState(false);
  const [Category, setCategory] = useState("");
  const [SubCategoryOpen, setSubOpen] = useState(false);
  const [SubCategory, setSubCategory] = useState(false);
  const [AddCategoryOpen, setAddCateOpen] = useState(false);
  const [AddSubCateOpen, setAddSubOpen] = useState(false);
  const [thisList, setList] = useState([
    {
      categoryName: "",
      subCategories: [
        {
          _id: "",
          categoryName: "",
        },
      ],
      id: "",
    },
  ]);

  const onDeleteCategory = async (id: any) => {
    await Axios.delete("http://localhost:3000/api/category/" + id, {
      headers: {
        Authorization: "Bearer " + user.token,
      },
    })
      .then((res) => {
        alert("delete success");
      })
      .catch((error) => {
        alert(error);
      });

    await Axios.get("http://localhost:3000/api/category")
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onDeleteSub = async (subid: any, id: any) => {
    await Axios.delete(
      "http://localhost:3000/api/category/" + id + "/" + subid,
      {
        headers: {
          Authorization: "Bearer " + user.token,
        },
      }
    )
      .then((res) => {
        alert("delete success");
      })
      .catch((error) => {
        alert(error);
      });

    await Axios.get("http://localhost:3000/api/category")
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleAddCategory = () => {
    setAddCateOpen(true);
  };

  const handleAddCategoryClose = () => {
    setAddCateOpen(false);
  };

  const HandleNewCategory = (e: any) => {
    NewCateName = e.target.value;
  };

  const onAddCategoryOk = async () => {
    if (NewCateName === "") {
      setAddCateOpen(false);
    } else {
      await Axios.post(
        "http://localhost:3000/api/category/",
        {
          categoryName: NewCateName,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          alert("Add success");
          setAddCateOpen(false);
        })
        .catch((error) => {
          alert(error);
        });

      await Axios.get("http://localhost:3000/api/category")
        .then((res) => {
          setList(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const handleAddSubCate = (id: any) => {
    setAddSubOpen(true);
    setCateID(id);
  };

  const handleAddSubClose = () => {
    setAddSubOpen(false);
  };

  const handleNewSubCate = (e: any) => {
    NewSubCate = e.target.value;
  };

  const onAddSubCateOk = async () => {
    if (NewSubCate === "") {
      setAddSubOpen(false);
    } else {
      await Axios.post(
        "http://localhost:3000/api/category/" + CateID,
        {
          categoryName: NewSubCate,
        },
        {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        }
      )
        .then((res) => {
          alert("Add success");
          setAddSubOpen(false);
        })
        .catch((error) => {
          alert(error);
        });

      await Axios.get("http://localhost:3000/api/category")
        .then((res) => {
          setList(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  useEffect(() => {
    async function fetchdata() {
      await Axios.get("http://localhost:3000/api/category")
        .then((res) => {
          setList(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    fetchdata();
  }, []);

  if (!user.token) return <div />;

  return (
    <div className="margin">
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {thisList.map((value) => (
          <TreeItem
            nodeId={value.id}
            label={
              <div className="label-root">
                <div className="flex">
                  <CategoryIcon />
                  <p className="categories-name">{value.categoryName}</p>
                </div>
                <div>
                  <IconButton onClick={() => handleAddSubCate(value.id)}>
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => onDeleteCategory(value.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            }
          >
            {value.subCategories.map((sub) => (
              <TreeItem
                nodeId={sub._id}
                label={
                  <div className="label-root">
                    <div className="flex">
                      <ClassIcon />
                      <p className="categories-name">{sub.categoryName}</p>
                    </div>
                    <div>
                      <IconButton
                        onClick={() => onDeleteSub(sub._id, value.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                }
              />
            ))}
          </TreeItem>
        ))}
      </TreeView>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        onClick={handleAddCategory}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={AddCategoryOpen}
        onClose={handleAddCategoryClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <TextField
            onChange={HandleNewCategory}
            autoFocus
            margin="dense"
            label="Category name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCategoryClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={onAddCategoryOk}>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={AddSubCateOpen}
        onClose={handleAddSubClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Add Sub Category</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleNewSubCate}
            autoFocus
            margin="dense"
            label="Sub category name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddSubClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={onAddSubCateOk}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
