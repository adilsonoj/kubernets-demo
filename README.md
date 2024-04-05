# Kubernetes demo

## Aplicação web
```bash
./web
```

## Manifesto
```bash
./k8s/deploy.yaml
```

## Comandos básicos

```bash
k3d cluster create meucluster --servers 3 --agents 3

k3d cluster create meucluster --servers 3 --agents 3 -p “30000:30000@loadbalancer”
k3d cluster list
k3d cluster delete

kubectl get nodes
kubectl get pods

kubectl get deployment

kubectl get replicaset
kubectl get all

#lista de versões de recursos
kubectl api-resources 

#Lista o historico dos depolyment
kubectl rollout history deploymet <name> 

#processo de rollback
kubectl rollout undo deployment <name> 

kubectl apply -f deploy.yaml

kubectl apply -f deploy.yaml && watch ‘kubectl get pod’

kubectl delete pod <name>

kubectl describe pod [podname]

kubectl port-forward <pod name> <port local>:<port pod>

kubectl port-forward <service name> <port local>:<port pod>
```